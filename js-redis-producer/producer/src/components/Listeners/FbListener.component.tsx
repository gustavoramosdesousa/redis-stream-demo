'use client'
import { getQuery } from '@/repository/firebase.repository';
import { SimpleOrder } from '@/types/types';
import { onSnapshot } from 'firebase/firestore';
import {ForwardRefRenderFunction, forwardRef, useEffect, useState} from 'react';
interface IFbListenerProps{
    title: string;
    collection: string;
    className?: string;
};
/**
 * 	id?: string;
	codigo: string;
	descricao: string;
	data_criacao: string;
 */
export const FbListener = ({title, className, collection} : IFbListenerProps) => {
    const [documents, setDocuments] = useState<SimpleOrder[]>([]);
    useEffect(() => {
        var q = getQuery(collection);
        onSnapshot(q, querySnapshot =>{
          var documentsArray = new Array<SimpleOrder>();
          querySnapshot.forEach(doc => {
            var order : SimpleOrder = {id: doc.id,
                                      codigo: doc.data().codigo, 
                                      status: doc.data().status,
                                      data_criacao: doc.data().data_criacao};
              documentsArray.push(order);
          })
          setDocuments(documentsArray);
        })
      },[]);

    return (
        <div className="my-4">
            <p className="text-neutral-500 text-sm font-light">{title}</p>
            <div className="w-full h-30 bg-zinc-300 rounded-3xl shadow flex overflow-hidden ">
                {(documents.length>0) && documents.map((document, index) => (
                    <span key={index} className=' w-[20px]  odd:bg-white even:bg-slate-200 px-1.5'>
                        <p className='leading-1 w-1 break-words align-middle text-sm' > {document.codigo} </p>
                    </span>
                ))}
            </div>
        </div>
    );
};
