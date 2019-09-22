import  React from 'react';
import "./assets/logo/favicon.png";
import "./assets/css/font-awesome.min.css";
import "./assets/css/animate.css" ;
import "./assets/css/hover-min.css";
import "./assets/css/datepicker.css" ;
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/style.css" ;
import "./assets/css/responsive.css";


class Review extends React.Component
{
    render()
    {
        return(
            <div className="home1-testm item">
                <div className="home1-testm-single text-center">
                    <div className="home1-testm-img">
                        <img src="assets/images/client/testimonial1.jpg" alt="img"/>
                    </div>
                    <div className="home1-testm-txt">
								<span className="icon section-icon">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
								</span>
                        <p>
                            {this.props.review.summary}
                        </p>
                        <h3>
                            <a href="#">
                                {this.props.review.name}                            </a>
                        </h3>
                        <h4>{this.props.review.title}</h4>
                    </div>

                </div>

            </div>
                )
    }
}
export default Review