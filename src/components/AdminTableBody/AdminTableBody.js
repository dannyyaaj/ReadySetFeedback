import React, { Component } from 'react';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AdminTableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackToDelete: '',
      feedbackResponses: [],
      deleteModalIsOpen: false
    }
  }

  componentDidMount() {
    this.displayFeedback();
  }

  openDeleteModal = (feedbackId) => {
    this.setState({ 
      feedbackToDelete: feedbackId,
      deleteModalIsOpen: true 
    });
  };

  closeDeleteModal = () => {
    this.setState({ 
      feedbackToDelete: '',
      deleteModalIsOpen: false });
  };

  displayFeedback = () => {
    
    axios.get('/api/feedback')
      .then(response => {
        this.setState({
          feedbackResponses: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteFeedback = () => {
    this.setState({
      deleteModalIsOpen: false
    });
    // Delete
    axios.delete(`/api/feedback/${this.state.feedbackToDelete}`)
      .then((response) => {
        this.displayFeedback()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const responsesToDisplay =
      this.state.feedbackResponses.map((feedback, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{feedback.feeling}</TableCell>
            <TableCell>{feedback.understanding}</TableCell>
            <TableCell>{feedback.support}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
            <TableCell>
              <DeleteForever
                color="secondary"
                onClick={() => this.openDeleteModal(feedback.id)}
              />
            </TableCell>
            <Dialog
              open={this.state.deleteModalIsOpen}
              onClose={this.closeDeleteModal}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Delete Response"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete this?
            </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.closeDeleteModal} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.deleteFeedback} color="primary" autoFocus>
                  Yes
            </Button>
              </DialogActions>
            </Dialog>
          </TableRow>
        )
      })

    return (
      <TableBody>{responsesToDisplay}</TableBody>
    )
  }
}

export default AdminTableBody
