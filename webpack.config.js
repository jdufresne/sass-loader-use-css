import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "sass-loader",
          },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
}
