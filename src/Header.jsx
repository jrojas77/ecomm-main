import React from "react";

export default function Header() {
    return (

    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form
        className="bg-white shadow rounded p-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
    <div class="fcf-body">

        <div id="fcf-form">
        <h3 class="fcf-h3">Contact us</h3>
        
            <div class="fcf-form-group">
                <label for="Name" class="fcf-label">Your name</label>
                <div class="fcf-input-group">
                    <input type="text" id="Name" name="Name" class="fcf-form-control" />
                </div>
            </div>

            <div class="fcf-form-group">
                <label for="Email" class="fcf-label">Your email address</label>
                <div class="fcf-input-group">
                    <input type="email" id="Email" name="Email" class="fcf-form-control" />
                </div>
            </div>

            <div class="fcf-form-group">
                <label for="Phone" class="fcf-label">Your Phone</label>
                <div class="fcf-input-group">
                    <input id="phone" name="phone" class="fcf-form-control" rows="6" maxlength="3000" />
                </div>
            </div>

            <div class="fcf-form-group">
                <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
            </div>
        </div>

    </div>

      </form>
    </div>    
    )
}