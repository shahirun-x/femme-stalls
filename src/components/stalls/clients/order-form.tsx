"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { whatsappLink } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface OrderFormProps {
  client: StallClient;
}

const sizes = ["S", "M", "L", "XL", "XXL", "Custom"];

export function OrderForm({ client }: OrderFormProps) {
  const [name, setName] = useState("");
  const [productChoice, setProductChoice] = useState(client.products[0]?.name ?? "Custom Order");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      `Hi! I'd like to place an order with ${client.name} (via Femme Stalls).`,
      name && `Name: ${name}`,
      `Product: ${productChoice}`,
      `Quantity: ${quantity}`,
      client.category === "clothes" && `Size: ${size}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    window.open(whatsappLink(client.whatsapp, lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--client-secondary)] bg-white p-5 sm:p-6 space-y-5">
      <div>
        <Label htmlFor="order-name">Your Name</Label>
        <Input id="order-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="h-12 text-base" />
      </div>

      <div>
        <Label htmlFor="order-product">Product you want</Label>
        <Select
          id="order-product"
          value={productChoice}
          onChange={(e) => setProductChoice(e.target.value)}
          className="h-12 text-base"
        >
          {client.products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Custom Order">Custom Order</option>
          <option value="Other">Other</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="order-qty">Quantity</Label>
        <Input
          id="order-qty"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="h-12 text-base"
        />
      </div>

      {client.category === "clothes" && (
        <div>
          <Label htmlFor="order-size">Your Size</Label>
          <Select id="order-size" value={size} onChange={(e) => setSize(e.target.value)} className="h-12 text-base">
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </div>
      )}

      <div>
        <Label htmlFor="order-message">Any message (optional)</Label>
        <Textarea
          id="order-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Tell us anything else about your order"
          className="text-base"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-lg shadow-md transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        Send Order on WhatsApp
      </button>
    </form>
  );
}
