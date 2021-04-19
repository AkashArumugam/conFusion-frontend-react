import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {

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
    return(
        <div></div>
    );

}

function RenderComments({dish}) {
    var comments = <div></div>;
    if(dish) {
        comments = dish.comments.map((comment) => {
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <br />---------&gt;
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}    
                </li>
            );
        });
    }
    return (
        <Card>
            <CardBody>
            <CardTitle>Comments</CardTitle>
            <ul>{comments}</ul>
            </CardBody>
        </Card>
    );
}

const  DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;