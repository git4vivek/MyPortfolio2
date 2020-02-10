import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ Width: '512', margin: 'auto' }}>
                        <CardTitle style={{ color: '#ffffff', height: '176px', background: 'url(https://jujoru.es/wp-content/uploads/2018/12/2856694f0e244b9-750x375.jpg) center / cover' }} >#1</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                            A React based web tool to search images via 3rd party API requests.
            </CardText>
                        <CardActions border>
                            <Button colored >
                                {/* <a href="https://github.com/git4vivek/teamUp-CSE546">GitHub</a> */}
                                <a href="https://github.com/git4vivek/React_ImageSearchTool">GitHub</a>
                            </Button>

                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>
                                <a href="https://youtu.be/IZlLsnfItQ0">Live Demo</a>
                            </Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 https://juniortech.org/wp-content/uploads/2017/04/python-software-logo-300x158.jpg) center / cover'*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://jujoru.es/wp-content/uploads/2018/12/2856694f0e244b9-750x375.jpg) center / cover' }} >#2</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                            To be added soon !!! Meanwhile Browse Python and Node.js repos
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 https://discoversdkcdn.azureedge.net/postscontent/python/flask-introduction.png*/}
                    <Card shadow={5} style={{ Width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://jujoru.es/wp-content/uploads/2018/12/2856694f0e244b9-750x375.jpg) center / cover' }} >#2</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>To be added soon !!! Meanwhile Browse Python and Node.js repos</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(https://discoversdkcdn.azureedge.net/postscontent/python/flask-introduction.png) center / cover' }} >#1</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                        TeamUp - A social networking React application for event management using Google Cloud Platform. Find and match with likeminded people :-)
            </CardText>
                        <CardActions border>
                            <Button colored >
                                <a href="https://github.com/git4vivek/teamUp-CSE546">GitHub</a>
                            </Button>

                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>Live Demo Coming Soon</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#ffffff', height: '176px', background: 'url(https://juniortech.org/wp-content/uploads/2017/04/python-software-logo-300x158.jpg' }} >#2</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                        Image Recommendation system using machine learning
            </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/git4vivek/MWDB">GitHub</a>
                            </Button>
                            {/* <Button colored>CodePen</Button> */}
                            {/* <Button colored>Live Demo Not Available</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(https://discoversdkcdn.azureedge.net/postscontent/python/flask-introduction.png) center / cover' }} >#2</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                        Application for managing the Registration, Deregistration and modification of student enrollments in courses on moodle platform
            </CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/git4vivek/MoodleApp">GitHub</a>
                            </Button>
                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>Live Demo Coming Soon</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>


            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'red', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png) center / cover' }} >#1</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                        Data visualization using Yelp Data performing Semantic Text Analysis on user reviews to showcase Businesses KPIs
            </CardText>
                        <CardActions border>
                            <Button colored >
                                <a href="https://github.com/git4vivek/dv-project">GitHub</a>
                            </Button>

                            {/* <Button colored>CodePen</Button> */}
                            <Button colored>Live Demo Coming Soon</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#ffffff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/580px-AmazonWebservices_Logo.svg.png' }} >#2</CardTitle>
                        <CardText style={{fontWeight:'bold'}}>
                        A cloud application build using AWS EC2, S3,SQS and Lambda that can handle multiple requests and autoscales as per the traffic.
            </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/git4vivek/CSE546Project1">GitHub</a>
                            </Button>
                            {/* <Button colored>CodePen</Button> */}
                            {/* <Button colored>Live Demo Not Available</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                
                </div>


            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }

    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>NodeJS</Tab>
                    {/* <Tab>MongoDB</Tab> */}
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;