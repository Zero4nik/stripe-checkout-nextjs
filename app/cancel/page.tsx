import Link from "next/link";
import './CancelPage.css'
export default function CancelPage(){
    return(
        <div className="containerCloseBuying">
            <h1 className="CloseBuying">Оплата отменена</h1>
            <Link href='/'>
            <button className="newTryButton">
                Попробовать снова
            </button>
            </Link>
        </div>
    )
}