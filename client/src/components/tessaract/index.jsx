import * as React from 'react';
import {Tesseract} from 'tesseract.ts';

class Tesser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStore : '',
            resultTessaract: ''
        }
    }

    componentDidMount() {
        if (this.props.croppedImage) {
            this.imageRecognize();
        }
    }

    /* componentDidUpdate(prevProps) { */
        /* if (this.props.croppedImage && !this.state.imageStore) {
            this.setState({
                imageStore: this.props.croppedImage
            }, () => {
                this.imageRecognize();
            })
            
        } */

        /* if (this.props.croppedImage ) {
            debugger;
            this.imageRecognize();
        } */
    /* } */

    imageRecognize = () => {
        const { croppedImage } = this.props;

        let image = new Image();

        image.src = croppedImage;
        image.onload = () => {
        
            Tesseract.recognize(croppedImage)
            .progress((progr) => {
                console.log(progr);
            }).then((result) => {
                this.setState({
                    resultTessaract: result.text
                })
            })
        }
    }
    
    render() {
        const { resultTessaract } = this.state;

        return (
            <div>
                <h2>Preview of Image</h2>
                <img width='200px' height='200px' src={this.props.croppedImage} alt=""/>

                {resultTessaract ? 
                    <div>
                        <h2>Result of Image Extract</h2>
                        <textarea name="" id="" cols="30" rows="10" value={resultTessaract} readOnly></textarea>
                    </div> : '' }
            </div>
        )
    }
}

export default Tesser;