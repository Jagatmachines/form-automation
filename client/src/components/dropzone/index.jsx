import React from 'react';
import Dropzone from 'react-dropzone-component';
import Cropper from 'react-cropper';
import Tesseract from '../tessaract';
import 'cropperjs/dist/cropper.css';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';


class PdfDropzone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myDropzone: '',
            files : [],
            image: '',
            croppedImage: ''
        }
    }

    componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl:`image`,
    };

    eventHandlers = {
        init: (dropzone) => {
            // this.props.errorCheck(true);
            this.setState({
                myDropzone : dropzone
            });
        },

        //New file added
        processing: (file) => {
            this.fileResponse(file);
            /* this.props.errorCheck(false);
            this.props.fileResponse(file); */
        },

        /* addedfile: (file: any) => {
          this.props.fileResponse(file);
        }, */
        error: (error) => {
            if(error.accepted===false){
                // this.props.errorCheck(true);
            }
            // xhr.ontimeout = ((e: any) => {
            //     debugger;
            //     {
            //         console.log('PDF timeout');
            //     }
            // });
          },

        // Send file starts
        sending: (file, xhr, formData) => {
          // console.log(file.dataUrl)
            // xhr.ontimeout = ((e: any) => {
            //     debugger;
            //     {
            //         console.log('PDF timeout');
            //     }
            // }); 
        },

        // File upload Progress
        totaluploadprogress: (progress) => {
            console.log("progress ", progress);
          },

         /*  queuecomplete: (progress: any) => {
            $('.meter').delay(999).slideUp(999);
          }, */

          // On removing file
          removedfile: (file) => {
            // this.props.errorCheck(false);
            // console.log('deletefile', file);
            // this.props.deletePdf(file.name);
          },

          /* complete: (file: {}) => {
            console.log(file);

          }, */
          //success
          success:(file, response) => {
          /* let pdfResponse = {
              title:file.name,
              url:response.file,
              resourceType:'PDF'
            } */
              // send back to the pdf
            /* this.props.pdfUrl(pdfResponse) */

          }

    };

    djsConfig = {
        // important
        maxFilesize: 10,
        acceptedFiles: "image/jpeg,image/png",
        autoProcessQueue: true,
        // dictFileTooBig:"File too big",
        // dictInvalidFileType:"Invalid File Type",
        dictDefaultMessage: `<div class="browser-text"><p>Drag and drop your file here or <span>BROWSE</span> for the picture to upload</p><span class="image-required">Maximum file size: 10MB | Allowed Extension: .jpg .png</span></div>`,

        // options
        createImageThumbnails: true,
        clickable: true,
        timeout: 800000,
        /* previewTemplate: ReactDOMServer.renderToStaticMarkup(
            <div className="dz-preview dz-file-preview">
                <div className="dz-details">
                    <div className="dz-filename"><span data-dz-name="true"></span></div>
                    <img data-dz-thumbnail="true" />
                </div>
                <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
                {/* <div className="dz-success-mark"><span>✔</span></div>
                <div className="dz-error-mark"><span>✘</span></div> *//* } */
                /* <div className="dz-error-message"><span data-dz-errormessage="true"></span></div>
            </div>
        ), */

        addRemoveLinks: true,

        dictRemoveFile: 'Delete',
        dictCancelUpload: 'Cancel Upload',

    };

    fileResponse = async (file) => {
        let interval;
    
        await new Promise((resolve, reject) => {
            interval = setInterval(() => {
                if (file.size) {
                    this.setState({
                        // image: file.dataURL
                        image: file.dataURL
                    }, () => {
                        if (this.state.image) {
                            resolve();
                        }
                    })
                }         
            }, 10);
        })
    
        clearInterval(interval);
      }

    crop = () => {
        /* const blob = this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
            debugger
        }) */
        /* this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
            this.props.fileResponse(blob);
        }) */
        // this.props.fileResponse(this.state.image);
        // console.log()
        this.setState({
            croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL()
        }, () => {
            this.props.fileResponse(this.state.croppedImage || "")
        })
    }

    clearCroppedImage = () => {
        this.setState({
            croppedImage: ''
        })
    }

    /* cropImage = () => {} */

    render () {
        const { image, croppedImage } = this.state;

        if (image) {
            if (croppedImage) {
                return (
                    <div>
                        <button className='btn btn-danger' onClick={this.clearCroppedImage}>Try Again</button>
                        <Tesseract croppedImage={croppedImage}/>
                    </div>
                )
            } else {
                return (
                    <div>
                        <Cropper
                            ref='cropper'
                            src={image}
                            style={{height: 400, width: '100%'}}
                            // Cropper.js options
                            /* aspectRatio={16 / 9} */
                            guides={true}
                            /* crop={this.cropImage}  */
                        />
                        <button className='btn btn-success' onClick={this.crop}>Submit</button>
                    </div>
                )
            }
        } else {
            return (
                <Dropzone 
                    config={this.componentConfig}
                    eventHandlers={this.eventHandlers}
                    djsConfig={this.djsConfig} />
            )
        }
    }
}

export default PdfDropzone;