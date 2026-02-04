{{- define "lms.name" -}}
lms
{{- end }}

{{- define "lms.fullname" -}}
{{ .Release.Name }}-{{ include "lms.name" . }}
{{- end }}
