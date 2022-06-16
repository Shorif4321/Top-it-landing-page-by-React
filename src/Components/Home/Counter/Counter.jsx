import './Counter.css'
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='counter'>

            {/* <div className='count-text col-6 col-md-3'>
                <h1> <span className='count'>120</span> +</h1>
               
            </div>
            <div className='count-text col-6 col-md-3'>
                <h1><span className='count'>1.2</span> k</h1>
                
            </div>
            <div className='count-text col-6 col-md-3 '>
                <h1><span className='count'>90</span>%</h1>
              
            </div>
            <div className='count-text col-6 col-md-3'>
                <h1><span className='count'>100</span>+</h1>
             
            </div> */}
            <div className='count-text col-6 col-md-3'>
                <CountUp
                    start={0}
                    end={120}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />+</h1>
                            <p>Completed Projects</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div  className='count-text col-6 col-md-3'>
                <CountUp
                    start={0}
                    end={1.2}
                    duration={1}
                    decimals={1}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />K</h1>
                            <p>Happy Clients</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div  className='count-text col-6 col-md-3'>
                <CountUp
                    start1={0}
                    end={90}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start1 }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />%</h1>
                            <p>Reports Faster</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div  className='count-text col-6 col-md-3'>
                <CountUp
                    start1={0}
                    end={100}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start1 }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />+</h1>
                            <p>Worldwide Office</p>
                        </div>
                    )}
                </CountUp>
            </div>

        </div>
    );
};

export default Counter;