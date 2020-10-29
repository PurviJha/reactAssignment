import React, { Component } from 'react'
import {
    Card, CardText, CardBody, Container,
    CardTitle, Button, Modal, ModalBody, ModalFooter,
} from 'reactstrap';
import Carousel from "react-elastic-carousel";
import EditPost from './editPost'
import { connect } from 'react-redux';
import { getPost,addPost } from '../redux/actioncreator'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

class Post extends Component {
    constructor(props) {
        super(props)
        this.child = React.createRef();
        this.state = {
            title: "",
            body: "",
            show: false,
        }
    }
    componentDidMount(){
        this.props.postReducer()
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChild = () => {
        this.child.handleSubmit();
    }

    render() {
        let postData={title:this.state.title
            ,body:this.state.body}
        return (
            <div >
                <Container className="mt--7" fluid>
                    <Card style={{ maxWidth: "900px", marginTop: "30px", marginLeft: "300px" }}>
                        <CardBody >
                            <CardTitle style={{ marginLeft: "350px" }}><b>Creat Your Post</b></CardTitle>
                            <hr />
                            <CardText >
                                <div className="input-field col s6">

                                    <div className="row">
                                        <label htmlFor="title"><b>Title</b></label>
                                        <input placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} type="text" />
                                    </div>

                                    <div className="row">
                                        <label htmlFor="body"><b>What you are thinking about?</b></label>
                                        <input placeholder="What you are thinking about?" value={this.state.body} onChange={this.handleChange} id="body" type="text" />
                                    </div>
                                    
                                </div>
                            </CardText>
                            
                            <Button color="primary" onClick={()=>this.props.handleinput(postData)}>Post</Button>
                        </CardBody>
                    </Card>

                    <Card style={{ maxWidth: "900px",minWidth: "900px", marginTop: "30px", marginLeft: "300px" }}>
                        <CardBody>
                            <CardTitle style={{ marginLeft: "400px" }}><b>Posts</b></CardTitle>
                            <hr />
                            {console.log("data",this.props.data)}

                            <Carousel breakPoints={breakPoints}>
                                {this.props.data.map((item, i) => {
                                    return(
                                       
                                        <Card key={item.id} style={{ maxWidth: "600px", marginLeft: "10px", marginRight: "10px" }}>

                                            <CardTitle style={{ marginLeft: "40px" }}>
                                                <b>{item.title}</b>
                                            </CardTitle>
                                            <hr />
                                            <CardText style={{ marginLeft: "40px" }}>
                                                <p >{item.body}</p>
                                            </CardText>
                                            <Button color="primary" data-backdrop="false" onClick={() => {
                                                this.setState({
                                                    show: !(this.state.show)
                                                })
                                            }}>Edit</Button>

                                            <Modal data-backdrop="false" isOpen={this.state.show}   >
                                                <ModalBody >
                                                    <EditPost onRef={ref => (this.child = ref)} state={{ title: this.state.title, body: this.state.body }} />
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" data-backdrop="false" onClick={this.handleChild}>Submit</Button>{' '}
                                                    <Button color="secondary" onClick={() => {
                                                        this.setState({
                                                            show: !(this.state.show)
                                                        })
                                                    }}>Cancel</Button>
                                                </ModalFooter>
                                            </Modal>
                                            <Button color="primary" onClick={this.handleClick}>Delete</Button>
                                            <br />
                                        </Card>
                                   
                                    )  
                                })
                                }
                                 </Carousel>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapStateToProps",state)
    return {
        data: state.data
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        postReducer:()=>{dispatch(getPost())},
        handleinput:(input)=>{dispatch(addPost(input))}
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)