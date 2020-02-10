import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Vivek Agarwal</h2>
                        <img
                            src="https://storage.cloud.google.com/cloudbucket-1/Vivek%20Photo.jpg?authuser=1"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Interested in Software Engineer Opportunities. Graduating in May 2020</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (480) 544-4170
                  </ListItemContent>
                                </ListItem>

                                {/* <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (123) 456-7890
                  </ListItemContent>
                                </ListItem> */}

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        agarwal.vivek101@gmail.com
                  </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        MySkypeID: live:vivekkagarwal
                  </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;