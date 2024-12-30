import Card from "./Card"
function Tours({data, removeTour}){
    return <>
        <div className="tour">
            {data.map((item) =>{
                return <Card key={item.id} {...item} removeTour={removeTour}></Card>
                   
                
            })}
            
        </div>
    </>
}
export default Tours;