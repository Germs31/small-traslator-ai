import TranslateBox from "@/components/TranslateBox";


export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border h-auto w-auto flex justify-center flex-col p-10">
        <h1 className="text-2xl font-bold mb-6">TRANSLATOR ^____^</h1>
        <TranslateBox 
          name="converted from"/>

        <div className="my-6">
          `^ From ---- To v`
        </div>
        
        <TranslateBox 
          name="converted to" />
      </div>
    </div>
  );
}
