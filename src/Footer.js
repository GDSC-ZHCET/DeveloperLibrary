import React from "react";
import "./App.css";

function Footer() {
    return (
    <footer class="page-footer">
        <div class="container footer-top">
            <div class="col-md-4 left logo-footer-column">
                <a class="footer-brand footer-brand-svg" href="https://developers.google.com/community">
                    <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg" class="svg" alt="Google Developer Student Clubs logo" />
                </a>
                <div class="footer-description"></div>
            </div>
            <div class="col-md-4 left quick-links"><h5>Quick Links</h5><ul><li><a href="/chapters/" class="None">Chapters</a></li><li><a href="/events/" class="None">Upcoming events</a></li><li><a href="https://developers.google.com/community/dsc/" class="None">About GDSC</a></li><li><a href="https://docs.google.com/document/d/1e5nldTEybLG0ih3vgJQCiwH1-3QZnuFs4iwUiUerca8/view" class="None" target="_blank">Lead Terms</a></li><li><a href="/participation-terms/" class="None">Participation Terms</a></li><li><a href="https://policies.google.com/privacy" class="None">Privacy</a></li><li><a href="https://policies.google.com/terms" class="None">Terms</a></li></ul></div>
            <div class="col-md-4 left">
                <h5>Social</h5>
                <ul class="social-links">
                <li><a class="social-button icon-facebook" href="https://www.facebook.com/Google-Developers-967415219957038/" target="_blank" rel="noopener noreferrer" title="Facebook"></a></li>                    <li><a class="social-button icon-facebook" href="https://www.facebook.com/Google-Developers-967415219957038/" target="_blank" rel="noopener noreferrer" title="Facebook"></a></li>
                    <li><a class="social-button icon-instagram" href="https://www.instagram.com/googledevs/" target="_blank" rel="noopener noreferrer" title="Instagram"></a></li>
                    <li><a class="social-button icon-linkedin" href="https://www.linkedin.com/company/googledevelopers/" target="_blank" rel="noopener noreferrer" title="LinkedIn"></a></li>
                    <li><a class="social-button icon-youtube" href="https://www.youtube.com/googledevelopers" target="_blank" rel="noopener noreferrer" title="YouTube"></a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="site-info">
                        <div class="copyright">
                            © 2023
                            Google
                        </div>
                        <a href="https://www.bevy.com" class="powered_by_bevy">Powered by
                            <img class="powered_by_bevy_image" src="/static/images/powered_by_bevy.svg" alt="Bevy logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer
