import BrandMinecraft from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-minecraft.tsx";

export function Header() {
  return (
    <div className="relative">
      <header className="absolute w-full">
        <div class="flex items-center gap-1">
          <BrandMinecraft aria-hidden="true" />
          <div class="text-2xl ml-1 font-bold">
            Kaihei
          </div>
        </div>
      </header>
    </div>
  );
}
