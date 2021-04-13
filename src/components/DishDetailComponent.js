import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments() {
        var comments = <div></div>;

        if(this.props.dish) {
            comments = this.props.dish.comments.map((comment) => {
                return (
                    <li>{comment.comment}</li>
                );
            });

            return (
                <Card>
                    <CardBody>
                    <CardTitle>Comments</CardTitle>
                    {comments}
                    </CardBody>
                </Card>
            );
        }
        return comments;
    }

    render() {
        

        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}

export default DishDetail;