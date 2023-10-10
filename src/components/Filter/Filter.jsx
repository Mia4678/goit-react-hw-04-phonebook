import React from 'react';
import { Label, Input } from '../ContactForm/ContactForm.styles';

// class Filter extends Component {
//   handleChange = e => {
//     const filterValue = e.target.value.toLowerCase();
//     this.props.onFilterChange(filterValue);
//   };

//   render() {
//     return (
//       <div>
//         <Label>
//           Filter contacts by name:
//           <Input
//             type="text"
//             value={this.props.filter}
//             onChange={this.handleChange}
//           />
//         </Label>
//       </div>
//     );
//   }
// }

// export default Filter;

function Filter({ filter, onFilterChange }) {
  const handleChange = e => {
    const filterValue = e.target.value.toLowerCase();
    onFilterChange(filterValue);
  };

  return (
    <div>
      <Label>
        Filter contacts by name:
        <Input type="text" value={filter} onChange={handleChange} />
      </Label>
    </div>
  );
}

export default Filter;
