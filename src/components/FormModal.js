import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'reactstrap';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      date: null,
      id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.book) {
      const { title, author, date, id } = nextProps.book;
      this.setState({ title, author, date, id });
    } else {
      this.setState({
        title: '',
        author: '',
        date: null,
        id: null
      });
    }
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <Form onSubmit={this.handleSubmit}>
          <ModalHeader toggle={this.props.toggle}>
            {this.props.formTitle}
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Book title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Book author"
                value={this.state.author}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.toggle}>Cancel</Button>
            <Button type="submit" color="primary">
              Submit
            </Button>{' '}
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      id: this.state.id
    });
  }
}

export default FormModal;
