import { Toast } from "bootstrap";
import { v4 as uuidv4 } from "uuid";

const CreateStandardMarkup = (toastColour: string, icon: string, text: string): string => {
    const identifier = `immo-toast-${uuidv4()}`;

    const markup = `
            <div id="${identifier}" class="toast ${toastColour} text-white"
                 role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    <i class="fas ${icon} fa-fw"></i>
                    <span>${text}</span>
                </div>
            </div>
        `;

    const element = document.getElementById("immo-toast-container");
    element.innerHTML += markup;

    return identifier;
};

const CreateMarkupWithButton = (toastColour: string, icon: string, text: string): string => {
    const identifier = `immo-toast-${uuidv4()}`;

    const markup = `
            <div id="${identifier}" class="toast align-items-center ${toastColour} text-white border-0"
                 role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                <div class="toast-body">
                  ${text}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
            </div>
        `;

    const element = document.getElementById("immo-toast-container");
    element.innerHTML += markup;

    return identifier;
};

/**
 * Renders an error toast notification.
 * 'toastText' = Optional - Sets default text if not assigned
 */
export const ToastError = (toastText?: string): void => {
    const markupIdentifier = CreateMarkupWithButton("bg-danger", "fa-exclamation-triangle", toastText || "An error has occurred, please try again later.");
    const element = document.getElementById(markupIdentifier);

    const toast = new Toast(element, {
        autohide: false,
        animation: true
    });

    element.addEventListener("hidden.bs.toast", () => element.remove());

    toast.show();
};

/**
 * Renders a validation error toast notification.
 * 'toastText' = Optional - Sets default text if not assigned
 */
export const ToastValidationError = (toastText?: string): void => {
    const markupIdentifier = CreateMarkupWithButton("bg-danger", "fa-exclamation-triangle", toastText || "Form validation issues found, please check and try again.");
    const element = document.getElementById(markupIdentifier);

    const toast = new Toast(element, {
        delay: 10000,
        autohide: true,
        animation: true
    });

    element.addEventListener("hidden.bs.toast", () => element.remove());

    toast.show();
};

/**
 * Renders an priary toast notification with a loading spinner.
 */
export const ToastProcessing = (toastText: string): string => {
    const markupIdentifier = CreateStandardMarkup("bg-primary", "fa-spinner fa-spin", toastText);
    const element = document.getElementById(markupIdentifier);

    const toast = new Toast(element, {
        autohide: false,
        animation: true
    });

    element.addEventListener("hidden.bs.toast", () => element.remove());

    toast.show();

    return markupIdentifier;
};

/**
 * Destroys the notification programatically from memory once it's no longer
 * required (e.g. loading/processing server side request)
 */
export const ToastDestroy = (identifier: string): void => {
    const element = document.getElementById(identifier);
    element.remove();
};