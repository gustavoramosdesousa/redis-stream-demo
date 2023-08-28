'use client'
import { getQuery, addDocument } from '@/repository/firebase.repository';
import { SimpleOrder } from '@/types/types';
import { onSnapshot } from 'firebase/firestore';
import {ForwardRefRenderFunction, forwardRef, useEffect, useState} from 'react';
import { Input } from './Input.component';
import { Button } from './Button.component';
import { order_status } from "@/utils/constants";


import {v4 as uuid} from 'uuid';
import { SocketIoService } from '@/services/Socketio.service';

const myId = uuid();
const socketio_service = new SocketIoService(myId);
let my_chat_room = "SALA_DE_CONTROLE";
const message = {room_id: my_chat_room, status:'', data: {}};
socketio_service.joinRoom(message);
//socketio_service.joinRoom("delayed");
interface IFbListenerProps{
    title: string;
    collection: string;
    className?: string;
};
const default_document_state = {
    id:'',
    codigo: '',
    status: '',
    data_criacao: ''
  };
/**
 * 	id?: string;
	codigo: string;
	descricao: string;
	data_criacao: string;
 */
export const FbForm = ({title, className, collection} : IFbListenerProps) => {
    const [new_document, setNewDocument] = useState<SimpleOrder>(default_document_state);

    /**
     * Adiciona um novo Documento
     * @param e Event
     */
    const saveDocument = async (e : any) => {
        e.preventDefault();
        const formattedDate = new Date().toISOString();
        setNewDocument({ ...new_document, data_criacao: formattedDate });
        //console.log("Cliente - addNewGame", new_document);
        if (new_document.codigo !== '' && new_document.status !== '') { 

            //console.log("Cliente - addNewGame", formattedDate);
            const doc_ref = await addDocument(collection, new_document);
            setNewDocument({ ...new_document, id: doc_ref.id });
            socketio_service.sendMessage(new_document);
            setNewDocument(default_document_state);
        }
    };

    return (
        <form method="post" onSubmit={saveDocument} className="grid">
            <div className="grid grid-cols-2 gap-3">
                <Input title="Código da ordem" placeholder="número da ordem" type="text"
                    value={new_document.codigo} onChange={(e) => setNewDocument({ ...new_document, codigo: e.target.value })}/>
        
                <div>
                    <label className="text-blue text">Status</label>
                    <select name="" id="myFbFormSelect" className='w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400'
                        value={new_document.status} onChange={(e) => setNewDocument({ ...new_document, status: e.target.value })}>
                        <option value="">Selecione</option>
                        {order_status.map((status, index)=>{
                            return ( 
                            <option key={index} value={status.title} >{status.title}</option>
                            )
                        })}
                    </select>
                </div>
                <input type="hidden" value={new_document.data_criacao}/>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <Button  title="Limpar" className="bg-white border border-blue text-blue"/>
                <Button  title="Carregar" className="bg-blue border border-blue text-white"/>
                <Button  title="Salvar" type="submit" className="bg-blue border border-blue text-white"/>
            </div>
        </form>
    );
};