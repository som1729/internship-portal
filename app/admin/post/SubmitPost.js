import React, { Component } from 'react';
import { TextArea, Form, Button, Label, Segment } from 'semantic-ui-react';

class SubmitPost extends Component {
  constructor() {
    super();
    this.initialState = { post: '' };
    this.state = this.initialState;
    this.handleSubmit = (event) => {
      event.preventDefault();
      const post = event.target.querySelector('textarea').value;
      event.target.querySelector('textarea').value = '';
      console.log(post);
      this.state = this.initialState;
    };
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment raised>
          <Form.Field>
            <Label color="blue" ribbon htmlFor="submitText" className="form-labels">
              Submit NEW POST :
            </Label>
          </Form.Field>
          <Form.Field>
            <TextArea
              placeholder="Try adding multiple lines"
              rows={8}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Segment>
      </Form>
    );
  }
}

export default SubmitPost;

