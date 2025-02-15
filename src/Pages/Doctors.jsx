import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Doctor from "../Ui/Doctor";
import doctors from "../data/doctors"; 

export default function Doctors() {
  return (
    <div>
      <Header />
      <div className="pl-14 pr-14 max-sm:pl-7 max-sm:pr-7 pt-8 pb-8">
        <div className="grid grid-cols-2 grid-flow-row justify-center gap-8 max-xl:grid-cols-1">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
