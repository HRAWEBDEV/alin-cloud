export default function BoardItem({ success = false }: { success?: boolean }) {
  return (
    <div
      data-success={success}
      className="group w-52 rounded-md overflow-hidden border border-border"
    >
      <div className="p-2 bg-red-700 dark:bg-red-400 group-data-[success='true']:bg-teal-700 dark:group-data-[success='true']:bg-teal-400 text-background">
        <div className="flex">
          <div className="basis-24">
            <span>123</span>
          </div>
          <div className="grow">test</div>
          <div className="basis-24 text-end">12:43</div>
        </div>
        <p className="text-center font-medium">بیرون بر</p>
      </div>
      <div className="p-2 bg-neutral-100 dark:bg-neutral-900">
        <div>
          <h3 className="text-center p-0.5 rounded-md bg-neutral-200 border border-border mb-1 text-neutral-700 dark:text-neutral-400 text-sm">
            پیش غذا
          </h3>
          <ul>
            <li>
              <div>
                <span>1 </span>
                <span>سالاد سزار</span>
              </div>
              <div className="grid gap-0.5 ps-4 pt-0.5 text-sm">
                <p className="text-orange-700 dark:text-orange-400">
                  با روغن زیتون
                </p>
                <p className="text-orange-700 dark:text-orange-400">
                  با سس سفید
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
