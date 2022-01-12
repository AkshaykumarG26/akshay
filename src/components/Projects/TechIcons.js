import React from 'react';
import { DiReact, DiFirebase,DiMongodb, DiCss3, DiJavascript, DiWindows, DiJava  } from 'react-icons/di';
import {FaNode, FaNodeJs} from 'react-icons/fa'
import {FcLinux} from 'react-icons/fc'
import { SiRedux, SiJson, SiHtml5, SiVisualstudiocode, SiJavascript } from 'react-icons/si';


const TechIcons = ({tag}) => {
    if(tag === 'React')
        return <DiReact size = '50%' color = '#5ED4F3' />
    else if(tag === 'Firebase')
        return <DiFirebase size = '50%' color='#F7C428'/>
    else if(tag === 'Mongodb')
        return <DiMongodb size = '50%' color = '#559134'/>
    else if(tag === 'Node')
        return <FaNode size = '50%'/>
    else if(tag === 'CSS')
        return <DiCss3 size = '50%'  color = "#2171B6"/>
    else if(tag === 'JavaScript')
        return <SiJavascript size = '50%' color = '#EFD81C'/>
    else if(tag === 'JSON')
        return <SiJson size = '50%'/>
    else if(tag === 'HTML')
        return <SiHtml5 size = '50%' color = "#DC4A25"/>  
    else if(tag === 'Redux')
        return <SiRedux size = '50%' color = '#7248B6'/> 
    else if(tag === 'Linux')
        return <FcLinux size = '50%'/>
    else if(tag === 'Windows')
        return <DiWindows size = '50%'/>
    else if(tag === 'VS code')
        return <SiVisualstudiocode size = '50%' color = '#2174B3'/>
    else if(tag === 'Java')
        return <DiJava size = '50%' color = '#E06C00'/>
    else if(tag === 'ExpressJS')
        return <FaNodeJs size = '50%' color = '#E06C00'/>
    return <SiRedux size = '50%'/>
    
   
}
export default TechIcons;