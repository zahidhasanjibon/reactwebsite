import serviceData from '../serviceData/imageData';
import Card from './Card';

const Service = () => (
    <>
        <div className="my-5">
            <h1 className="text-center">OUR SEERVICES</h1>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {serviceData.map((card) => (
                            <Card
                                key={card.id + Math.random()}
                                src={card.imgsrc}
                                title={card.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
);
export default Service;
