import Image from 'next/image'
import { BodyContent } from './Components/BodyContent/page'
import { Cards } from './Components/Cards/page'
import { CARDONE_HEADING, CARDONE_TITLE } from '@/utils/constant'

export default function Home() {
  return (
<>
  <BodyContent  />
  <div className='flex flex-row overflow-x-auto gap-4' style={{width: '100%'}}>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  <div className="flex" style={{minWidth: '300px'}}>
  <Cards heading={CARDONE_HEADING} 
    title={CARDONE_TITLE}
    headingStyle={{color: 'red'}}
    titleStyle={{color: 'green'}}
    containerStyle={{backgroundColor: 'blue'}}
  />
  </div>
  </div>
  
</>
 
  )
}
