import { FbListener } from "@/components/Listeners/FbListener.component";
import { RedisListener } from "@/components/Listeners/RedisListener.component";
import { Button } from "@/components/form/Button.component";
import { FbForm } from "@/components/form/FbForm.component";
import { Input } from "@/components/form/Input.component";

export default function Home() {
  //console.log("home::socket", socketio_service);


  return (
    <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
            <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
              <div className="mb-4">
                  <p className="text-blue text-xl font-medium">Adicionar Ordens</p>
                  <p className="text-blue text-base font-light"> Crie suas ordens e modifique seus status. </p>
              </div>
              <FbForm collection="ordens_de_compra" title=""/>
              <div className="mb-4 pt-4">
                  <p className="text-blue text-xl font-medium">Streams e Assinantes</p>
                  <p className="text-blue text-base font-light"> Acompanhe todos os streams criados e quem os assinou. </p>
              </div>
            </div>
            <div className="mb-4 ml-4">
                <p className="text-blue text-xl font-medium"> Firebase data </p>
                <p className="text-blue text-base font-light"> Acompanhe todas ordens criadas e seus status. </p>
                
                <FbListener title='all_orders :: S0 :: permanent :: mutable' collection="ordens_de_compra"/>

                <p className="text-blue text-xl font-medium"> Redis Streams </p>
                <p className="text-blue text-base font-light"> Acompanhe todas filas geradas. </p>
                <div className="my-4">
                    <RedisListener title='all_orders :: SA :: permanent :: immutable' stream_id="all_orders"/>
                    <RedisListener title='delayed :: SB :: time based :: mutable'   stream_id="delayed"/>
                    <RedisListener title='approved :: SC :: permanent :: immutable'   stream_id="approved"/>
                </div>
            </div>
        </div>
    </div>
  );
}
