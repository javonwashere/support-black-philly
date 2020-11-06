import React from "react";
import "./newsletter.css";
import fist from "../../assets/sbp_fist.png";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default class Newsletter extends React.Component {
  constructor(props) {
    super();
    const { mailchimpEndpoint, content, title } = props.data[0];
    this.state = { email: "", result: null };
    this.state = {
      ...this.state,
      endpoint: mailchimpEndpoint,
      content: content.content,
      title,
    };
    console.log(mailchimpEndpoint);
  }

  // 1. via `.then`
  _handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(this.state.email, null, this.state.endpoint) // listFields are optional if you are only capturing the email address.
      .then((data) => {
        this.setState({ result: data });
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log();
        if(this.state.result.result === "success "){
          alert("Successfully subscribed!");
        } else alert(this.state.result.msg);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <div class="newsletter-wrapper">
        <div class="header-wrapper">
          <div style={{}}>
            <h1>{this.state.title}</h1>
          </div>
          <div className="fist-wrapper">
            <img src={fist} />
          </div>
        </div>
        <p class="paragraph-text">{this.state.content}</p>
        <small>SWITCH YOUR LIFESTYLE</small>
        <div class="newsletter-form-wrapper">
        <form class="newsletter-form" onSubmit={this._handleSubmit}>
          <input
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            placeholder="E-mail address"
            onChange={this.handleChange}
          />
          <br />
          <button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
          >
            <p variant="button">SUBMIT</p>
          </button>
        </form>
        </div>
      </div>
    );
  }
}

// export default () => {
//   return (
// <div class="newsletter-wrapper">
//   <div class="header-wrapper">
//     <div>
//       <h1>Being Down for</h1>
//       <h1>the Movement</h1>
//     </div>
//     <div className="fist-wrapper">
//       <img src={fist} />
//     </div>
//   </div>
//   <p>
//     Buying Black today, & everyday for decades to come. We see Support Black
//     Philly as a lifestyle, and if you are visiting this page we believe that
//     you want to embrace that lifestyle too. Get to know the faces behind the
//     businesses you are supporting by engaging on social (Instagram, twitter,
//     face-book) and stay up to date as we grow. Philadelphia is here to be at
//     the forefront of this movement.
//   </p>
//   <small>SWITCH YOUR LIFESTYLE</small>
// </div>
//   );
// };
