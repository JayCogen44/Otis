import React, { Component } from 'react';
// import './css/DocNav.css';

class DocNav extends Component {


    render(){
        
        // ALLOWS ANIMATION OF DROPDOWN NAVIGATION
        let coll = document.getElementsByClassName("collapsible");
        let i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }

        return(
            <div className='DocNav'>
            <span className='collapsible'>DOC NAVIGATION </span>
                <div className="content">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>

            <span className='collapsible'>DOC NAVIGATION 2</span>
                <div className="content">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>
            
            <span className='collapsible'>DOC NAVIGATION 3</span>
                <div className="content">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>

            </div>
        )
    }
}

export default DocNav;