import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

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
                    <li>
                        {comment.comment}
                        <br />---------&gt;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}    
                    </li>
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
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;