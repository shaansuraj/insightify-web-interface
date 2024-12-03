# Insightify Website Interface

This is the frontend application for **Insightify**, built using **React**. It allows users to view and interact with news articles, categorized by various topics. The app fetches data from the **Insightify Apringboot Backend** API and displays articles in an organized and user-friendly way.

## Features

- **Category-based News**: Users can select news categories to filter articles.
- **View Article Details**: Click on an article to view its full details, including title, content, and source.
- **Responsive Design**: The app is fully responsive and optimized for both desktop and mobile devices.

## Prerequisites

Before running the frontend, ensure you have the following installed:

- **Node.js** (Recommended: LTS version)
- **npm** (or use `yarn` if preferred)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/shaansuraj/insightify-web-interface.git
cd insightify-web-interface
```

### Install Dependencies

Install the necessary dependencies using npm (or yarn):

```bash
npm install
```

### Run the Development Server

To run the app locally:

```bash
npm start
```

This will start the development server and open the app in your default web browser. The app will be available at `http://localhost:3000` by default.

### Build for Production

To create a production build, run:

```bash
npm run build
```

This will create a `build` directory with all the optimized production files.

### API Integration

This frontend communicates with the backend service running on `http://localhost:8000`. Make sure that the backend is up and running before using the frontend.

## Folder Structure

```plaintext
src/
  ├── components/
  │    ├── ArticleList.js      // Displays list of articles
  │    ├── ArticleDetails.js   // Displays individual article details
  │    ├── CategorySelector.js // Dropdown to select news category
  │    ├── Header.js           // Main header with the app title and category selector
  ├── App.js                   // Main app component
  ├── index.js                 // Entry point for React app
  ├── index.css                // Global styles
public/
  ├── index.html               // Main HTML file
```

### Component Breakdown

1. **App.js**: The main entry point of the app. It manages the state for the selected news category and passes it to the `ArticleList` and `Header` components.
2. **Header.js**: Displays the app's title and contains the `CategorySelector` to choose a news category.
3. **CategorySelector.js**: A dropdown component that allows the user to select a news category. It triggers a state change in the `App.js` component.
4. **ArticleList.js**: Displays a list of articles fetched from the backend based on the selected category.
5. **ArticleDetails.js**: Shows the details of a single article when the user clicks on an article from the list.

### Styling

The app uses basic CSS for styling, which is located in `index.css`. It includes styles for the header, article list, individual article items, and article details view.

### CORS (Cross-Origin Resource Sharing)

If you encounter CORS issues when developing the frontend locally (running on port `3000` while the backend is on port `8000`), ensure that the backend is configured to allow requests from the frontend’s domain. 

In case you face CORS issues, you can add the following CORS configuration to the backend:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // Frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
```

## Running in Production

To deploy the app to production, you can:

1. **Build the project** with `npm run build`.
2. **Host** the build folder on a static web server like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).

## Testing

You can test the app manually by interacting with it through the browser. For automated testing, you can use tools like Jest or React Testing Library, which are already set up by default in a Create React App project.

### Example Tests

To run tests, use:

```bash
npm test
```

## Known Issues

- Ensure that the backend service is up and running for the app to fetch news data properly.
- CORS issues may occur if the backend isn't configured to allow requests from the frontend.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the README based on the actual structure, environment, and configuration of your application!