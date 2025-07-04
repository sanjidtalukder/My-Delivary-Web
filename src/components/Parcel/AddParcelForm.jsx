import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { FaBox, FaUserAlt, FaTruck } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext/AuthContext";


const AddParcelForm = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [deliveryCost, setDeliveryCost] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const type = watch("type");

  const calculateCost = (data) => {
    console.log(data)
    let cost = 50;
    if (data.type === "non-document") cost += 30;
    if (data.weight) cost += parseInt(data.weight) * 10;
    if (data.senderServiceCenter !== data.receiverServiceCenter) cost += 20;
    return cost;
  };

  const onSubmit = (data) => {
    const cost = calculateCost(data);
    setDeliveryCost(cost);
    toast.success(`Estimated Delivery Cost: ৳${cost}`);
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    const formData = watch();
    const parcelData = {
      ...formData,
      weight: formData.type === "document" ? null : formData.weight,
      cost: deliveryCost,
      creation_date: new Date().toISOString(),
    };

    try {
      await axios.post("/api/parcels", parcelData);
      toast.success("Parcel Added Successfully!");
      reset();
      setShowConfirm(false);
    } catch (err ) {
      toast.error("Failed to add parcel");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-2xl rounded-3xl border border-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <FaBox className="text-primary" /> Add New Parcel
        </h2>
        <p className="text-gray-500 mt-2">Schedule a door-to-door delivery with ease.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Parcel Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaBox className="text-indigo-500" /> Parcel Info
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <select {...register("type", { required: true })} className="input input-bordered w-full">
              <option value="document">Document</option>
              <option value="non-document">Non-Document</option>
            </select>
            <input {...register("title", { required: true })} placeholder="Parcel Title" className="input input-bordered w-full" />
            {type === "non-document" && (
              <input {...register("weight")} type="number" placeholder="Weight (kg)" className="input input-bordered w-full" />
            )}
          </div>
        </div> 

        {/* Sender Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaUserAlt className="text-green-500" /> Sender Info
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input defaultValue={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />
            <input {...register("senderContact", { required: true })} placeholder="Contact" className="input input-bordered w-full" />
            <input {...register("senderRegion", { required: true })} placeholder="Region" className="input input-bordered w-full" />
            <input {...register("senderServiceCenter", { required: true })} placeholder="Service Center" className="input input-bordered w-full" />
            <input {...register("senderAddress", { required: true })} placeholder="Address" className="input input-bordered w-full" />
            <input {...register("pickupInstruction", { required: true })} placeholder="Pickup Instruction" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Receiver Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaTruck className="text-rose-500" /> Receiver Info
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input {...register("receiverName", { required: true })} placeholder="Name" className="input input-bordered w-full" />
            <input {...register("receiverContact", { required: true })} placeholder="Contact" className="input input-bordered w-full" />
            <input {...register("receiverRegion", { required: true })} placeholder="Region" className="input input-bordered w-full" />
            <input {...register("receiverServiceCenter", { required: true })} placeholder="Service Center" className="input input-bordered w-full" />
            <input {...register("receiverAddress", { required: true })} placeholder="Address" className="input input-bordered w-full" />
            <input {...register("deliveryInstruction", { required: true })} placeholder="Delivery Instruction" className="input input-bordered w-full" />
          </div>
        </div>

        <button type="submit" className="btn w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:scale-[1.02] transition">
          Calculate Delivery Cost
        </button>
      </form>

      {showConfirm && (
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl text-center shadow">
          <p className="text-xl font-semibold text-blue-800 mb-3">
            Confirm Submission — Delivery Cost: <span className="text-green-600 font-bold">৳{deliveryCost}</span>
          </p>
          <button onClick={handleConfirm} className="btn btn-success px-8 text-white">Confirm & Save Parcel</button>
        </div>
      )}
    </section>
  );
};

export default AddParcelForm;
