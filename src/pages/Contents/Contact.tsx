import { Box, Typography } from "@mui/material";
//import "../../css/Contents/Contact.css";

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <Box>
        <Box>
          {/* <Typography variant="h4">Park Jeonghwan</Typography>
          <Typography variant="h5">WEB Developer (Frontend/Backend)</Typography> */}
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
            }}
          >
            CONTACT
          </Typography>
          <hr className="divider" />
          <Typography variant="h5">Comming Soon ...</Typography>
          {/* <a href="{{site.url}}{{site.baseurl}}/#about">Read More</a> */}
        </Box>
      </Box>
    </section>
    // <section id="contact">
    //   <div>
    //     {/* <div className="container">
    //         {% unless site.facebook_username == %}
    //         <a id="contact-button" href="https://m.me/{{site.facebook_username}}"
    //             className="button is-rounded is-uppercase has-text-weight-normal is-black is-outlined has-text-weight-semibold column is-two-fifths"
    //             target="_blank">
    //             <i className="fab fa-facebook-messenger"></i>Ping me on Messenger
    //         </a>
    //         {% endunless %}
    //         {% unless site.email == %}
    //         <a id="contact-button" href="mailto:{{site.email}}"
    //             className="button is-rounded is-uppercase has-text-weight-normal is-black is-outlined has-text-weight-semibold column is-two-fifths"
    //             target="_blank">
    //             <i className="fas fa-envelope"></i>Send me an Email
    //         </a>
    //         {% endunless %}
    //         {% unless site.twitter_username == %}
    //         <a id="contact-button" href="https://www.twitter.com/intent/tweet?screen_name={{site.twitter_username}}"
    //             className="button is-rounded is-uppercase has-text-weight-normal is-black is-outlined has-text-weight-semibold column is-two-fifths"
    //             target="_blank">
    //             <i className="fab fa-twitter"></i>Tweet me on Twitter
    //         </a>
    //         {% endunless %}
    //         <hr>
    //         <h3 className="is-size-5 is-uppercase has-text-weight-semibold has-text-black is-marginless">
    //             You Can find me here
    //         </h3>
    //         <div className="column is-full is-size-3">
    //             {% unless site.facebook_username == %}
    //             <a href="http://www.facebook.com/{{site.facebook_username}}" target="_blank" className="has-text-black"><i className="fab fa-facebook"></i></a>
    //             {% endunless %}
    //             {% unless site.twitter_username == %}
    //             <a href="https://twitter.com/intent/user?screen_name={{site.twitter_username}}" target="_blank" className="has-text-black"><i className="fab fa-twitter"></i></a>
    //             {% endunless %}
    //             {% unless site.instagram_username ==  %}
    //             <a href="http://www.instagram.com/{{site.instagram_username}}" target="_blank" className="has-text-black"><i className="fab fa-instagram"></i></a>
    //             {% endunless %}
    //             {% unless site.linkedin_username ==  %}
    //             <a href="http://www.linkedin.com/in/{{site.linkedin_username}}" target="_blank" className="has-text-black"><i className="fab fa-linkedin"></i></a>
    //             {% endunless %}
    //             {% unless site.github_username ==  %}
    //             <a href="http://www.github.com/{{site.github_username}}" target="_blank" className="has-text-black"><i className="fab fa-github"></i></a>
    //             {% endunless %}
    //             {% unless site.youtube_channel_id ==  %}
    //             <a href="http://www.youtube.com/channel/{{site.youtube_channel_id}}" target="_blank" className="has-text-black"><i className="fab fa-youtube"></i></a>
    //             {% endunless %}
    //             {% unless site.reddit_username ==  %}
    //             <a href="http://www.reddit.com/u/{{site.reddit_username}}" target="_blank" className="has-text-black"><i className="fab fa-reddit"></i></a>
    //             {% endunless %}
    //             {% unless site.behance_username ==  %}
    //             <a href="http://www.behance.com/{{site.behance_username}}" target="_blank" className="has-text-black"><i className="fab fa-behance"></i></a>
    //             {% endunless %}
    //             {% unless site.dribbble_username ==  %}
    //             <a href="http://www.dribbble.com/{{site.dribbble_username}}" target="_blank" className="has-text-black"><i className="fab fa-dribbble"></i></a>
    //             {% endunless %}
    //             {% unless site.spotify_username ==  %}
    //             <a href="http://open.spotify.com/user/{{site.spotify_username}}" target="_blank" className="has-text-black"><i className="fab fa-spotify"></i></a>
    //             {% endunless %}
    //         </div>
    //     </div> */}
    //   </div>
    // </section>
  );
}
export default Contact;
