if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prop');
}else{
  module.exports = require('./dev');
}