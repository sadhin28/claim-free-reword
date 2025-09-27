export default function OfferCard({ data }) {
  return (
    <div className="bg-gray-100/30 p-4 border rounded-lg shadow hover:shadow-2xl transition">
      {/* Logo / Icon */}
      <img
        src={data?.network_icon}
        alt={data?.name}
        className="w-12 h-12 mb-3"
      />

      {/* Title */}
      <h3 className="text-lg font-bold">{data?.name}</h3>

      {/* Description / Anchor text */}
      <p className="text-sm text-gray-800 mt-1">{data?.anchor}</p>

      {/* Payout info */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-semibold text-black">
          Payout: ${data?.payout}
        </span>
        <span className="text-xs text-gray-900">EPC: {data.epc}</span>
      </div>

      {/* Claim / CTA Button */}
      <a
        href={data?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Claim Reward
      </a>
    </div>
  );
}
