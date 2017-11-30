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
  ModalFooter,
  Alert
} from 'reactstrap';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      date: '',
      id: ''
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
        date: '',
        id: '',
        isValid: true,
        invalidMsg: ''
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
                onChange={e =>
                  this.setState({ title: e.target.value, isValid: true })
                }
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
                onChange={e =>
                  this.setState({ author: e.target.value, isValid: true })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                placeholder="Book date"
                value={this.state.date}
                onChange={e =>
                  this.setState({ date: e.target.value, isValid: true })
                }
              />
            </FormGroup>
            {!this.state.isValid && (
              <Alert color="danger">{this.state.invalidMsg}</Alert>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.toggle}>Cancel</Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.trim() === '') {
      this.setState({
        isValid: false,
        invalidMsg: 'The title is a required field.'
      });
      return;
    }
    if (this.state.author.trim() === '') {
      this.setState({
        isValid: false,
        invalidMsg: 'The author is a required field.'
      });
      return;
    }
    if (isNaN(Date.parse(this.state.date))) {
      this.setState({
        isValid: false,
        invalidMsg: 'Please provide a valid date.'
      });
      return;
    }
    this.props.handleSubmit({
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      id: this.state.id
    });
  }
}

export default FormModal;
