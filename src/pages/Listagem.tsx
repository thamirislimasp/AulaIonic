import "./Listagem.scss";
import { IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonBackButton,
    IonIcon,
    IonRippleEffect,
    IonContent,
} from "@ionic/react";
import { arrowBack, happy } from 'ionicons/icons';
import ArrowScheduler from "/public/arrow-scheduler.svg";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function Listagem () {
    const [lista, setListagem] = useState([]);
    const buscar = useRef(false);

    useEffect(() => {
            /*fetch("http://localhost/ionic/listagem.json")
            .then((res) => {
                console.log(res);
            })*/
            buscarProfessores();
    }, [buscar]);

    function buscarProfessores () {

        axios.get("http://localhost/ionic/listagem.json", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })        
        .then((res) => {
            console.log(res.data);
            setListagem(res.data.professores)
        })
        
    }

    const getWeekDay = (index) => {
        switch(index) {
            case "0":
                return "Segunda";
            case "1":
                return "Terça";
            case "2":
                return "Quarta";
            case "3":
                return "Quinta";
            case "4":
                return "Sexta";
            default:
                return ""
        }
    }
    
    return (        
      <>
        <IonHeader>
            <div className="header">
                <a href="/home" className="back-btn ion-activatable ripple-parent circle">                    
                    <IonRippleEffect></IonRippleEffect>
                    <IonIcon icon={arrowBack} />               
                </a>
                <div className="title">
                    Estudar
                </div>
            </div>
        </IonHeader>

        <IonContent  className="listagem-page">
            
            <div className="middle">
                <div className="info">                    
                    <div className="title">
                        Professores
                    </div>
                    <button className="icons" onClick={() => buscarProfessores()}>
                        <IonIcon icon={happy} /> 32 Total
                    </button>
                </div>
                <div className="filter-block">

                </div>
            </div>
            <div className="list">
                {lista.map((professor, index) => (
                <div className="teacher" key={index}>
                    <div className="user-info">
                        <div className="avatar"></div> 
                        <div className="info">                            
                            <div className="name">{professor['nome']}</div>
                            <div className="programing">{professor['lang']}</div>
                        </div>                              
                    </div>
                    <div className="description">{professor['desc']}</div>
                    <div className="schedules">
                        <div className="header">
                            <span>Dia</span>
                            <span>Horário</span>
                        </div> 
                        <ul>
                        {
                            Object.keys(professor["datas"]).map((index) => (                               
                                <li key={index}>
                                    <span>{getWeekDay(index)}</span>
                                    <img src={ArrowScheduler} alt="" />
                                    <span>{professor["datas"][index]}</span>                                    
                                </li>
                            ))
                        }
                        </ul>
                                    {/* <li className="disabled">
                                        <span>Quarta</span>
                                        <span>-</span>
                                    </li> */}
                    </div>   

                </div>))
                }
                
            </div>
        </IonContent >
        </>
    )
}

export default Listagem;