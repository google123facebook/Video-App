// import { useState } from 'react';
// import './App.css';

import { VideoAppRoot } from "./Video App/VideoAppRoot/VideoAppRoot";

// import WebRTC from "./WebRTC/WebRTC";

// import './todoList/todoListRoot.css';
// import TodoListRoot from './todoList/todoListRoot';
// import { useState } from 'react';
// import CalculatorRoot from './calculator/calculatorRoot';
// import ClassInformerRoot from './class informer/ClassInformer';
// import RootGroseryPriceCalculater from './Grosery Price Calculater/GroseryPriceCalculator';
// import RootPayMoneyCalculater from './PayMoneyCalculater/PayMoneyCalculaater';

// import TextEditerRoot from './Text Editer/TextEditerRoot/TextEditerRoot.jsx'

// function CatagoryRow({category}) {
//   return (
//     <tr>
//     <th colSpan='2'>
//       {category}
//     </th>
//     </tr>
//   )
// }

// function ProductRow({stocked, name, price}) {
//   const color = stocked === true? "black": "red";
//   return (
//     <tr>
//     <td style={{color}}>
//       {name} 
//     </td>
//     <td>
//       {price}
//     </td>
//     </tr>
//   )
// }

// function ProductTable({products, searchText, isStored}) {
//   const rows = [];
//   let lastCatagory = null;
//   products.forEach((product) => {
//     if(product.stocked === false && isStored === true) return;
//     if(product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)  return; 
//     if(lastCatagory !== product.category) {
//       rows.push(<CatagoryRow key={product.category} category={product.category} />)
//       lastCatagory = product.category;
//     }
//     rows.push(<ProductRow stocked={product.stocked}  key={product.name} name={product.name} price={product.price} />)
//   });
//   return (
//     <table>
//       <thead><tr>
//         <td>Name</td>
//         <td>Price</td>
//         </tr>
//       </thead>
//       <tbody>
//         {rows}
//       </tbody>
//     </table>
//   )
// }

// function SeachBar({searchText, isStored, setIsStored, setSearchText}) {


//   return (
//     <form>
//         <input value={searchText} onChange={(e)=>setSearchText(e.target.value)}  type='text' placeholder='Search...' />
//       <label >
//         <input checked={isStored} onChange={(e)=>setIsStored(e.target.checked)} type="checkbox" /> 
//         only show proucts in stock
//       </label>
//     </form>
//   )
// }

// function ProductFilterTable({products}) {
//   const [isStored, setIsStored] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   return (
//     <>
//     <SeachBar isStored={isStored} searchText={searchText} setIsStored={setIsStored} setSearchText={setSearchText}  />
//     <ProductTable products={products} isStored={isStored} searchText={searchText} />
//     </>
//   )

// }





function App() {

  return (
    <div className='App' >
      {/* <ProductFilterTable products={procuts} /> */}
      {/* <TodoListRoot /> */}
      {/* <CalculatorRoot /> */}
      {/* <ClassInformerRoot /> */}
      {/* <RootPayMoneyCalculater /> */}
      {/* <RootGroseryPriceCalculater /> */}
      {/* <TextEditerRoot /> */}
      {/* <WebRTC /> */}
      <VideoAppRoot />
    </div>
  );
}

export default App;

