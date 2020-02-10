import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            // src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                            src="https://storage.cloud.google.com/cloudbucket-1/Vivek%20Photo.jpg?authuser=1"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>Python | Java | JavaScript | React | NodeJS | AWS | MongoDB | HTML/CSS</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/coderviv" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/git4vivek" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Website */}
                                <a href="https://git4vivek.github.io/MyPortfolio/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-globe" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank"> */}
                                {/* <i className="fa fa-youtube-square" aria-hidden="true" /> */}
                                {/* </a> */}

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;