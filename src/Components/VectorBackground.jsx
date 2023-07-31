import React from 'react';
import VectorImg from './../Assets/Images/Vector.png';
class VectorBackground extends React.Component {
  render() {
    const VectorStyles = {
      width: '100%',
      height: '100%',
      background: `radial-gradient(244.27% 244.27% at 50.00% -95.77%, rgba(169, 169, 169, 0.70) 0%, rgba(169, 169, 169, 0.00) 56.15%), #000 url("${VectorImg}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return <div style={VectorStyles}></div>;
  }
}

export default VectorBackground;
