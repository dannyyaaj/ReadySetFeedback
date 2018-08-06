import React, { Component } from 'react';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteForever from '@material-ui/icons/DeleteForever';

class AdminTableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackResponses: []
    }
  }

  componentDidMount() {
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
                
              />
            </TableCell>
          </TableRow>
        )
      })

    return (
      <TableBody>{responsesToDisplay}</TableBody>
    )
  }
}

export default AdminTableBody
