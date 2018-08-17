'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
app.use((0, _cors2.default)({ origin: true }));

// get reference to the client build directory
var staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../client/build'));

// pass the static files (react app) to the express app. 
app.use(staticFiles);

var router = _express2.default.Router();

app.use(router);

app.use('/app/*', staticFiles);

app.listen(port, function () {
    return console.log('Listening on port ' + port);
});

var serviceAccount = require('./prashanna-rastriya.json');

// Firebase config
_firebaseAdmin2.default.initializeApp({
    credential: _firebaseAdmin2.default.credential.cert(serviceAccount),
    databaseURL: "https://prashanna-rastriya.firebaseio.com"
});

var userRef = _firebaseAdmin2.default.database().ref('/Prashanna');

router.post('/api/timeChart', function (req, res) {
    var value = req.body;

    var newKey = userRef.push().key;

    userRef.child(newKey).set(value).then(function () {
        userRef.once('child_added').then(function (snap) {
            var resData = snap.val();
            resData.id = newKey;
            res.status(200).send(resData);
        }).catch(function (err) {
            res.status(400).send(err);
        });
    });
});

router.get('/api/entryList', function (req, res) {
    userRef.once('value').then(function (snap) {
        res.status(200).send(snap.val());
    }).catch(function (err) {
        console.log(err);
        res.status(400).send(err);
    });
});

// Creates the endpoint for our webhook 
router.post('/', function (req, res) {
    console.log('POST webhook');
    var body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.map(function (entry) {
            // Gets the message. entry.messaging is an array, but 
            // will only ever contain one message, so we get index 0

            var webhook_event = entry.messaging[0];
            // console.log(webhook_event);
            entry.messaging.map(function (mesgData) {
                var messageItem = mesgData.message.text;
                console.log(messageItem);
                if (messageItem) {
                    messageItem.match(/(http:|https:|)\/\/(player.|www.|.+)?(youtu(be\.com|\.be|be\.googleapis\.com))\/(medias|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

                    if (!RegExp.$3) {
                        console.log('Incorrect Url');
                    } else if (RegExp.$3.indexOf('youtu') > -1) {
                        // type = 'youtube';
                        // console.log(message);
                        var video_id = messageItem.split('v=')[1];

                        if (video_id) {
                            var ampersandPosition = video_id.indexOf('&');

                            if (ampersandPosition != -1) {
                                video_id = video_id.substring(0, ampersandPosition);
                            }
                            appStartDefine(video_id, function () {
                                console.log('Response of api');
                                res.sendStatus(200);
                            });
                        } else {
                            res.status(200).send('Incorrect Youtube url');
                        }
                    }
                }
            });

            // console.log(index, 'body Data haru', entryData);
        });
        /* body.entry.forEach(function(entry) {
         // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
            console.log('yeta xau');
            console.log(webhook_event);
         let details = webhook_event;
         debugger;
         if (details.message) {
            details.message.text.match(/(http:|https:|)\/\/(player.|www.|.+)?(youtu(be\.com|\.be|be\.googleapis\.com))\/(medias|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
             if (RegExp.$3.indexOf('youtu') > -1) {
                // type = 'youtube';
                // console.log(message);
                 var video_id = message.body.split('v=')[1];
                var ampersandPosition = video_id.indexOf('&');
                if(ampersandPosition != -1) {
                    video_id = video_id.substring(0, ampersandPosition);
                }
                 loadGoogleAuth(video_id);
                  console.log('Response of api');
              }
        }
        }); */

        // Returns a '200 OK' response to all requests
    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
});

/* router.get('/authStart', (req, res) => {
  console.log('Auth entered');
  loadGoogleAuth('vFN3eNe0_Hs');
  res.send(req.query);
})

router.get('/getToken', (req, res) => {
  console.log(req.query.verify);

  if (req.query.verify) {
      completeNewToken(req.query.verify);
  }

  res.send(req.query);
}) */

// Adds support for GET requests to our webhook
router.get('/', function (req, res) {

    console.log('GET webhook');
    console.log('verify', process.env.VERIFY_TOKEN);
    // Your verify token. Should be a random string.
    var VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    // Parse the query params
    var mode = req.query['hub.mode'];
    var token = req.query['hub.verify_token'];
    var challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});

var appStartDefine = function appStartDefine(videoID, callBack) {
    console.log('GET webhook appStartDefine');

    var obj = {
        videoID: videoID,
        time: new Date().getTime()
    };
    var userRef = _firebaseAdmin2.default.database().ref('/TGIFTechnology/' + obj.time);
    // let userRef = firebase.database().ref(`/TGIFTechnology`)

    userRef.set(obj).then(function (snap) {
        console.log('Data Saved Successfully');
        callBack();
    }).catch(function (err) {
        console.log('Error occured');
        console.log(err);
        callBack();
    });

    /* const {userId} = req.query;
    db.ref(`words/${userId}`).once('value')
    .then( snapshot => {
      res.send(snapshot.val());
    }); */

    /* userRef.once('value').then((snap) => {
        console.log(snap.val());
    }) */

    /* userRef.orderByKey().limitToFirst(1).once('value', (snap) => {
        console.log(snap.val());
      }); */
};

// Creates the endpoint for our webhook 
router.get('/appStartDefine', function (req, res) {
    appStartDefine('DH4ugAjuCHA', function () {});

    res.status(200).send('EVENT_RECEIVED');
    //res.sendStatus(403);
});

router.post('/appStart', function (req, res) {
    console.log('GET webhook');
    res.status(200).send('EVENT_RECEIVED');
});

//Get 1st music when App Start
router.get('/appStart', function (req, res) {
    var userRef = _firebaseAdmin2.default.database().ref('/TGIFTechnology');
    // userRef.limitToLast(1).once('value')
    userRef.orderByValue().once('value', function (snap) {
        // console.log(snap.val());
        res.status(200).send(snap.val());
    }); /* 
        .catch((err) => {
          console.log(err);
          res.sendStatus(403)
        }) */
});

router.get('/getPlaylist', function (req, res) {
    var playlist = _firebaseAdmin2.default.database().ref('/TGIFTechnology');

    playlist.once('value').then(function (snap) {
        // console.log(snap.val());
        res.status(200).send(snap.val());
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(403);
    });
});

app.get('/deteteVideo', function (req, res) {
    var userRef = _firebaseAdmin2.default.database().ref('/TGIFTechnology');

    if (req.query.videoId) {
        var videoIdRef = req.query.videoId;
        // console.log(videoIdRef);

        var childVideo = userRef.child(videoIdRef);

        childVideo.once('value').then(function (snap) {
            console.log('deleteSnap', snap.val());
            if (snap.val() != null) {
                console.log('delete started');
                childVideo.remove(function (err) {
                    if (err) {
                        console.log('err', err);
                        res.status(403).send(err);
                    } else {
                        res.sendStatus(204);
                    }
                });
            }
        }).catch(function (err) {
            console.log(err);
            res.sendStatus(403);
        });

        /* return childVideo.remove()
          .then(() => {
              console.log('delete successfully');
              // res.sendStatus(204)
          }).catch((err) => {
              console.log(err);
              // res.sendStatus(403)
          }) */
    }
});