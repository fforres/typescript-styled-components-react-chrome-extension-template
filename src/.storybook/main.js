// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
// };

module.exports = {
  stories: ["../**/stories.tsx"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [
              [
                "babel-plugin-styled-components",
                {
                  ssr: false,
                  fileName: true,
                },
              ],
            ],
          },
        },
        "react-docgen-typescript-loader",
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
