import Menu from "../components/Menu.tsx";


const Home = () => {
  return (
    <div class="">
      <Menu selected="Client"/>
      <h1>My Dictionary</h1>
      <p>Welcome to my dictionary!</p>
    </div>
  );
}

export default Home;


// export default function Home() {
//   const count = useSignal(3);
//   return (
//     <div class="px-4 py-8 mx-auto bg-[#86efac]">
//       <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//         <img
//           class="my-6"
//           src="/logo.svg"
//           width="128"
//           height="128"
//           alt="the Fresh logo: a sliced lemon dripping with juice"
//         />
//         <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
//         <p class="my-4">
//           Try updating this message in the
//           <code class="mx-2">./routes/index.tsx</code> file, and refresh.
//         </p>
//         <Counter count={count} />
//       </div>
//     </div>
//   );
// }
