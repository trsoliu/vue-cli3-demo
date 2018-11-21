module.exports = {
  plugins: {
    autoprefixer: {},
    //  过滤部分文件
    //  'postcss-px2rem-exclude': {
    //    remUnit: 75,
    //    exclude: /node_modules|assets|login|main/gi,
    //  }
    "postcss-px2rem": {
      remUnit: 75
    }
  }
};
