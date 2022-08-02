import React from "react";

export default function InputBox(Avatar){

    if (Avatar === "undefined"){
        return (
            <div>
                <form method="POST">
                    <input type="text" name="message" placeholder="Type your message in..." />
                    <input type="submit" value="Send!" />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Avatar here.</h3>
                <form method="POST">
                    <input type="text" name="message" placeholder="Type your message in..." />
                    <input type="submit" value="Send!" />
                </form>
            </div>
        )
    }
}