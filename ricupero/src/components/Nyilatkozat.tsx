"use client"
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const Nyilatkozat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid h-min place-content-center">
      <button
        onClick={() => setOpen(true)}
        className="rounded py-2 text-gray-200 transition-colors hover:text-gray-400"
      >
        Adatvédelmi Nyilatkozat
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Adatvédelmi Nyilatkozat
          </h2>
          <p className="text-xl font-medium text-neutral-200">1. Személyes adatok gyűjtése és tárolása</p>
          <p>
            A Ricupero elkötelezett a felhasználók adatainak védelme mellett. A weboldalunk látogatása során nem gyűjtünk személyes adatokat, beleértve, de nem kizárólag a nevét, e-mail címét, telefonszámát vagy bármilyen más azonosító információt. Kérjük, vegye figyelembe, hogy a kapcsolatfelvételi űrlapjainkon megadott adatokat nem tároljuk és nem mentjük el.
          </p>
          <p className="text-xl font-medium text-neutral-200">2. Adatok felhasználása</p>
          <p>
            Mivel nem tárolunk személyes adatokat, azokat nem használjuk fel semmilyen célra. Ez azt jelenti, hogy nem osztjuk meg harmadik féllel, és nem végzünk adatkezelési vagy marketing tevékenységet a felhasználók információi alapján. Az Ön biztonsága érdekében minden információ, amelyet a kapcsolatfelvételi űrlapokon ad meg, azonnal törlésre kerül, amint azt a kérése teljesítése során felhasználjuk.
          </p>
          <p className="text-xl font-medium text-neutral-200">3. Az Ön jogai</p>
          <p>
            A személyes adatok kezelésének törvényi kerete alapján Önnek jogai vannak, amelyek közé tartozik a következő:
          </p>
          <ul>
            <li><span className="font-medium text-neutral-200">Hozzáférés joga</span>: Joga van tájékoztatást kérni arról, hogy milyen adatokat kezelünk Önnel kapcsolatban.</li>
            <li><span className="font-medium text-neutral-200">Helyesbítés joga</span>: Joga van kérni a hibásan rögzített adatok helyesbítését.</li>
            <li><span className="font-medium text-neutral-200">Törlés joga</span>: Mivel nem tárolunk személyes adatokat, Önnek nincs szüksége arra, hogy kérje az adatai törlését. Bármilyen megadott adat, amelyet kapcsolatfelvétel során megadott, azonnal törlésre kerül.</li>
          </ul>
          <p className="text-xl font-medium text-neutral-200">4. Kapcsolat</p>
          <p>
          Amennyiben kérdései vagy észrevételei vannak az adatvédelmi nyilatkozattal kapcsolatban, kérjük, lépjen kapcsolatba velünk az alábbi elérhetőségeken:
          </p>
          <ul>
            <li><span className="font-medium text-neutral-200">Cég neve</span>: Ricupero KFT</li>
            <li><span className="font-medium text-neutral-200">Cím</span>: 1054 Budapest, Szemere utca 23. 1. em. 1.</li>
            <li><span className="font-medium text-neutral-200">E-mail</span>: ricupero@ricupero.hu</li>
            <li><span className="font-medium text-neutral-200">Telefonszám</span>: +36 30 331 6453</li>
          </ul>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const drawerRef = useRef<HTMLDivElement | null>(null); // Use a ref to access the drawer element
  const [height, setHeight] = useState(0); // State to hold the height of the drawer

  const y = useMotionValue(0);
  const controls = useDragControls();

  useEffect(() => {
    if (drawerRef.current) {
      setHeight(drawerRef.current.getBoundingClientRect().height); // Get the height when the drawer is open
    }
  }, [open]);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};