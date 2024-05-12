import { ref, inject, App, createApp, h } from "vue";
import Notify from "@/components/Notify";
import { NotificationType } from "./declaration";

const notificationSymbol = Symbol("notify");

export function useNotify() {
  const { notify } = inject(notificationSymbol, { notify: null });

  if (!notify) {
    throw new Error("Error");
  }

  return notify;
}

export default {
  install: (app: App) => {
    const notifications: NotificationType[] = [];

    const notify = ({ message, type }: NotificationType) => {
      notifications.push({ message, type });
      reRenderNotify();
      setTimeout(() => {
        removeNotification(notifications.indexOf({ message, type }));
      }, 2000);
    };

    const removeNotification = (index: number) => {
      notifications.splice(index, 1);
      reRenderNotify();
      document.querySelector(`.notification${index}`)?.remove();
    };

    const reRenderNotify = () => {
      const notifyInstance = createApp({
        render() {
          return h(Notify, { notifications });
        },
      });
      let notifyElement = document.getElementById("notifyElement");
      if (!notifyElement) {
        notifyElement = document.createElement("div");
        notifyElement.id = "notifyElement";
      }

      notifyInstance.mount(notifyElement);
      document.body.appendChild(notifyElement);
    };

    app.provide(notificationSymbol, { notify });
  },
};
