# 🛍️ ShoppyGlobe E-commerce Application

ShoppyGlobe is a fully responsive and functional e-commerce application built with React, Redux, and Tailwind CSS. It fetches real-time product data from an external API, supports cart operations, and demonstrates modern React development practices.

GitHub Link: https://github.com/ROHINI-H/ShoppyGlobe.git

## 🛸 Features

- 📃 View product listings  
- 📜 Product detail view  
- 📝 Add/remove from cart  
- ➕ Quantity update  
- 🔎 Search products  
- 📲 Responsive UI  
- 🦥 Lazy loading (React.lazy + Suspense)  
- 🚧 Error boundaries  
- 🌍 Redux-based global state  
- 🪝 Custom hook for fetching products

## 🛠️ Tech Stack

- React
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- Vite
- REST API: [DummyJSON Products](https://dummyjson.com/products)

## 🗃️ Project Structure
<pre>
src/
├── Components/
│ ├── Header.jsx
│ ├── ProductList.jsx
│ ├── ProductItem.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ ├── Checkout.jsx
│ └── NotFound.jsx
├── hooks/
│ └── useFetchProducts.js
├── utils/
│ ├── store.js
│ └── cartSlice.js
├── App.jsx
├── index.css
└── main.jsx
</pre>

## 📷 Screenshot
Home page - Product List page
![image](https://github.com/user-attachments/assets/c3699841-03d5-4402-be2d-0d1c48d10f7f)

Product detail page
![image](https://github.com/user-attachments/assets/1e039219-a130-48ec-b228-39fec69e50d8)

Cart page
![image](https://github.com/user-attachments/assets/e4e02e56-38b6-4aa0-bcca-94b4b5cade92)

Checkout page
![image](https://github.com/user-attachments/assets/c6c3b92e-13d6-4ff0-a290-39245e63cc92)

Using Search
![image](https://github.com/user-attachments/assets/0e951637-ea66-42f5-8673-b70ea2067c9a)

## 💻 Getting Started

1. **Clone the repository**:
  ```bash
  git clone https://github.com/ROHINI-H/ShoppyGlobe
  cd ShoppyGlobe
  ```
2. **Install Dependencies**:
  ```bash
  npm install
  ```
3. **Start the Development Server**:
  ```bash
  npm run dev
```
This will start the Vite development server. You’ll see output like:
```
> ecommerce-app@0.0.0 dev
> vite

  VITE v7.0.2  ready in 519 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
4. **Open the App**
Open your browser and go to:
`http://localhost:5173/`

## 🫱🏼‍🫲🏼Contributing
If you'd like to contribute to this project, please fork this repository and submit a pull request. You can also report issues or suggest improvements by opening an issue.

## 🔏License
This project is licensed under the MIT License.

## 🙇🏻‍♀️Acknowledgments
Special thanks to Internshala trainings for providing the training to learn react and develop this project.

## 🚀Connect with me
If you'd like to learn more about my work or connect professionally, you can find me on LinkedIn: www.linkedin.com/in/rohini-h
