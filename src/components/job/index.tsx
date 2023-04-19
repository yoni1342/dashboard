import React from 'react'

export default function index(props:{
  image:string;
  title:string;
  des: string;
  skills: Array<string>;
  status: boolean;
  company: string
}) {
  const {image, title, des, skills, status, company} = props;
  return (
    <div className="mt-5 grid h-full cursor-pointer">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Job"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge-secondary badge">NEW</div>
            </h2>
            <p>
              {des}
            </p>
            <div>
              {company}
            </div>
            <div className="card-actions justify-end">
              {
                skills.map((skill)=>(
                  <div className="badge-outline badge">{skill}</div>
                ))
              }
            </div>
          </div>
          {
            status?(
              <div className="text-3xl m-3 bg-gray-400 text-center text-white  rounded-lg py-1 hover:shadow-md active:scale-95 transition-transform ease-in-out delay-70">
                Applied
              </div>    
            ):(
            <div className="text-3xl m-3 bg-green-400 text-center text-white  rounded-lg py-1 hover:shadow-md active:scale-95 transition-transform ease-in-out delay-70">
              Apply
            </div>
            )
          }
        </div>
      </div>
  )
}
