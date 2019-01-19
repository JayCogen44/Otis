import React, { Component } from 'react';

class DocContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let changedContent;
        if (this.props.docData) {
            changedContent = <td dangerouslySetInnerHTML={{ __html: this.props.docData.content }} />
        } else {
            changedContent = (
                <div>
                    <h1>Getting Started</h1>
                    <p>This page is an overview of the React documentation and related resources.</p>
                    <p><strong>React</strong> is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                    <ul>
                        <li>Try React</li>
                        <li>Learn React</li>
                        <li>Staying Informed</li>
                        <li>Versioned Documentation</li>
                        <li>Something Missing?</li>
                    </ul>
                    <h2>Try React</h2>
                    <p>React has been designed from the start for gradual adoption, and <strong>you can use as little or as much React as you need.</strong> Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
                    <h3>Online Playgrounds</h3>
                    <p>If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on <a href="https://codesandbox.io/s/new" target="blank">CodeSandbox</a>.</p>
                    <p>If you prefer to use your own text editor, you can also <a href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html" target="blank">download this HTML file</a>, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
                    <h3>Add React to a Website</h3>
                    <p>You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.</p>
                    <h3>Create a New React App</h3>
                    <p>When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!</p>
                    <p>As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem.</p>
                    <h2>Learn React</h2>
                    <p>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.</p>
                    <ul>
                        <li>If you prefer to <strong>learn by doing</strong>, start with our practical tutorial.</li>
                        <li>If you prefer to <strong>learn concepts step by step</strong>, start with our guide to main concepts.</li>
                    </ul>
                    <p>Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you <em>will</em> get the hang of it.</p>
                    <h3>First Examples</h3>
                    <p>The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.</p>
                    <h3>React for Beginners</h3>
                    <p>If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out <a href="https://www.taniarascia.com/getting-started-with-react/" target="blank">this overview of React by Tania Rascia</a>. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!</p>
                    <h3>React for Designers</h3>
                    <p>If you’re coming from a design background, <a href="http://reactfordesigners.com/" target='blank'>these resources</a> are a great place to get started.</p>
                    <h3>JavaScript Resources</h3>
                    <p>The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.</p>
                    <p>We recommend going through <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">this JavaScript overview</a> to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.</p>
                    <blockquote>
                        <p><strong>Tip:</strong></p>
                        <p>Whenever you get confused by something in JavaScript, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">MDN</a> and <a href="http://javascript.info/" target="blank">javascript.info</a> are great websites to check. There are also <a href="/community/support.html" target="blank">community support forums</a> where you can ask for help.</p>
                    </blockquote>
                    <h3>Practical Tutorial</h3>
                    <p>If you prefer to <strong>learn by doing,</strong> check out our practical tutorial. In this tutorial, we build a tic-tac-toe game in React. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building <em>any</em> React apps, and mastering it will give you a much deeper understanding.</p>
                    <h3>Step-by-Step Guide</h3>
                    <p>If you prefer to <strong>learn concepts step by step,</strong> our guide to main concepts is the best place to start. Every next chapter in it builds on the knowledge introduced in the previous chapters so you won’t miss anything as you go along.</p>
                    <h3>Thinking in React</h3>
                    <p>Many React users credit reading Thinking in React as the moment React finally “clicked” for them. It’s probably the oldest React walkthrough but it’s still just as relevant.</p>
                    <h3>Recommended Courses</h3>
                    <p>Sometimes people find third-party books and video courses more helpful than the official documentation. We maintain a list of commonly recommended resources, some of which are free.</p>
                    <h3>Advanced Concepts</h3>
                    <p>Once you’re comfortable with the main concepts and played with React a little bit, you might be interested in more advanced topics. This section will introduce you to the powerful, but less commonly used React features like context and refs.</p>
                    <h3>API Reference</h3>
                    <p>This documentation section is useful when you want to learn more details about a particular React API. For example, React.Component API reference can provide you with details on how setState() works, and what different lifecycle methods are useful for.</p>
                    <h3>Glossary and FAQ</h3>
                    <p>The glossary contains an overview of the most common terms you’ll see in the React documentation. There is also a FAQ section dedicated to short questions and answers about common topics, including making AJAX requests, component state, and file structure.</p></div>)

        }
        return (
            <div className='DocContent'>
                {changedContent}
            </div>
        )
    }
};

export default DocContent;
